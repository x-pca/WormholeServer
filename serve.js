require('dotenv/config');

const express = require('express');
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const chalk = require('chalk');
const appRootPath = require('app-root-path');

const { ethers } = require('ethers');

const componentsPath = path.resolve(`${appRootPath}`, 'components');

const serveTranspiledFile = wallet => async (req, res, next) => {
  try {
    const { params } = req;
    const { wormhole } = params;
    const file = path.resolve(componentsPath, wormhole);

    if (!fs.existsSync(file)) {
      throw new Error(`Unable to find ${file}`);
    }

    const src = child_process.execSync(
      `npx babel --presets=@babel/preset-env,@babel/preset-react ${wormhole}`,
      { cwd: `${componentsPath}` },
    ).toString();

    const componentData = {
      jsx: src,
      styles: {
        button: {
          backgroundColor: 'green',
          fontSize: 18,
          borderRadius: 8,
          padding: 10,
        },
      },
    };

    const jsonComp = JSON.stringify(componentData);

    const signature = await wallet.signMessage(jsonComp);

    return res
      .status(200)
      .set({ 'X-Csrf-Token': signature })
      .send(jsonComp);

  } catch (e) {
    return next(e);
  }
};

(async () => {
  const { PORT, SIGNER_MNEMONIC } = process.env;
  const wallet = await ethers.Wallet.fromMnemonic(SIGNER_MNEMONIC);

  await new Promise(
    resolve => express()
      .get('/component/:wormhole', serveTranspiledFile(wallet))
      .listen(PORT, resolve),
  );
  
  console.clear();
  console.log(chalk.white.bold`🕳️ 🐛 Wormholes are being served!`);
  console.log('Note, request latency will be increased since files will be lazily recompiled on every request.');
  console.log(chalk.green.bold`Port: ${PORT}`);
})();
