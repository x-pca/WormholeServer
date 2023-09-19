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
    const { params, query } = req;
    const fileName = query.id.split('~')[1];
    // console.log('fileName', fileName);
    const file = path.resolve(componentsPath, fileName + '.jsx');

    if (!fs.existsSync(file)) {
      throw new Error(`Unable to find ${file}`);
    }

    const src = fs.readFileSync(file, 'utf8');

    // const depedencyPath = path.resolve(componentsPath, wormhole + '.dependency.json');

    // let jsResources = [];

    // if (!fs.existsSync(depedencyPath)) {
    //   console.log('No dependency file for ' + wormhole);
    // } else {
    //   jsResources = JSON.parse(fs.readFileSync(depedencyPath, 'utf8'));
    // }

    const componentData = {
      html: "",
      javascript: src,
      css: "",
      jsResources: [],
      cssResources: [],
      jsExtResources: [],
      cssExtResources: [],
      name: "",
      server: "",
      update: 0,
    };

    const jsonComp = JSON.stringify(componentData);

    const signature = await wallet.signMessage(jsonComp);

    return res
      .setHeader("Content-Type", "application/json")
      .status(200)
      .set({ 'X-Csrf-Token': signature })
      .send(jsonComp);

  } catch (e) {
    return next(e);
  }
};

const serveData = async (req, res, next) => {
  const { params, query } = req;

  const fileName = query.id;
  // console.log('fileName', fileName);
  const file = path.resolve(`${appRootPath}`, 'data', fileName + '.json');

  try {
    if (!fs.existsSync(file)) {
      throw new Error(`Unable to find ${file}`);
    }

    const src = fs.readFileSync(file, 'utf8');

    return res
        .setHeader("Content-Type", "application/json")
        .status(200)
        .send(src);
  } catch(e) {
    return next(e);
  }
};

(async () => {
  const { PORT, SIGNER_MNEMONIC } = process.env;
  const wallet = await ethers.Wallet.fromMnemonic(SIGNER_MNEMONIC);

  await new Promise(
    resolve => express()
      .get('/rest/web/json', serveTranspiledFile(wallet))
      .get('/rest/web/js', serveData)
      .get('/rest/web/menu', serveData)
      .listen(PORT, resolve),
  );
  
  console.clear();
  console.log(chalk.white.bold`🕳️ 🐛 Wormholes are being served!`);
  console.log('Note, request latency will be increased since files will be lazily recompiled on every request.');
  console.log(chalk.green.bold`Port: ${PORT}`);
})();
