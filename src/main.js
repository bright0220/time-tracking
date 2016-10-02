import 'materialize-css';
import 'materialize-css/bin/materialize.css'

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ListFiles from './ListFiles';
import TimeLog from './TimeLog';
import CreateTimeLog from './CreateTimeLog';

import {init} from './lib/goog.js';

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '': {
    component: ListFiles
  },
  '/time-log/:sheetId': {
    component: TimeLog
  },
  '/create-time-log': {
    component: CreateTimeLog
  },
});

router.start(App, '#app');

init();