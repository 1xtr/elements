import express, {Application} from 'express';
import {assignInlineVars} from '@vanilla-extract/dynamic';
import {oryTheme, Theme} from "../";

export const registerStatic = (app: Application, theme: Theme) => {
  app.use('/theme.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.send(`body#app {${assignInlineVars(oryTheme, {
      ...oryTheme,
      ...theme
    }).toString()}}`);
  })
  app.use('/', express.static('node_modules/@ory/themes/dist'))
}
