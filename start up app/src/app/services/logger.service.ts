import { Injectable, Optional } from '@angular/core';

export enum Level { OFF = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4, LOG = 5 }

export class Options {
  level: Level;
  global: boolean;
  globalAs: string;
  store: boolean;
  storeAs: string;
}

const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';

const DEFAULT_OPTIONS: Options = {
  level: null,
  global: true,
  globalAs: 'logger',
  store: false,
  storeAs: 'logger.level'
};


@Injectable()
export class LoggerService {

  private _level: Level;
  private _globalAs: string;
  private _store: boolean;
  private _storeAs: string;
  public Level: any = Level;

  constructor( @Optional() options?: Options) {
    let { level, global, globalAs, store, storeAs } = Object.assign({}, DEFAULT_OPTIONS, options);

    this._level = level;
    this._globalAs = globalAs;
    this._storeAs = storeAs;

    global && this.global();

    if (store || this._loadLevel()) this.store();

  }

  private _loadLevel = (): Level => Number(localStorage.getItem(this._storeAs));

  private _storeLevel(level: Level) { localStorage[this._storeAs] = level; }

  error(message?: any, ...optionalParams: any[]) {
    this.isErrorEnabled() && console.error.apply(console, arguments);
  }

  warn(message?: any, ...optionalParams: any[]) {
    this.isWarnEnabled() && console.warn.apply(console, arguments);
  }

  info(message?: any, ...optionalParams: any[]) {
    this.isInfoEnabled() && console.info.apply(console, arguments);
  }

  debug(message?: any, ...optionalParams: any[]) {
    this.isDebugEnabled() && (<any>console)[CONSOLE_DEBUG_METHOD].apply(console, arguments);
  }

  log(message?: any, ...optionalParams: any[]) {
    this.isLogEnabled() && console.log.apply(console, arguments);
  }

  global = () => (<any>window)[this._globalAs] = this;

  store(): LoggerService {

    this._store = true;
    let storedLevel = this._loadLevel();
    if (storedLevel === this._level) { this._level = storedLevel; }
    else { this._storeLevel(this.level); }

    return this;

  }

  unstore(): LoggerService {
    this._store = false;
    localStorage.removeItem(this._storeAs);
    return this;
  }

  isErrorEnabled = (): boolean => this.level >= Level.ERROR;
  isWarnEnabled = (): boolean => this.level >= Level.WARN;
  isInfoEnabled = (): boolean => this.level >= Level.INFO;
  isDebugEnabled = (): boolean => this.level >= Level.DEBUG;
  isLogEnabled = (): boolean => this.level >= Level.LOG;

  get level(): Level { return this._level; }

  set level(level: Level) {
    this._store && this._storeLevel(level);
    this._level = level;
  }

}

// Settings for custom loggers
export const OFF_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.OFF } }, LoggerService];
export const ERROR_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.ERROR , store: true} }, LoggerService];
export const WARN_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.WARN, store: true } }, LoggerService];
export const INFO_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.INFO } }, LoggerService];
export const DEBUG_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.DEBUG } }, LoggerService];
export const LOG_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.LOG } }, LoggerService];

