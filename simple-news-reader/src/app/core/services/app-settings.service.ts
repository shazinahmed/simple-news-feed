import { AppSettingsConfigKey } from './../../config/config';
import { AppSettings } from './../model/settings/AppSettings';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private config: AppSettings;
  private fileName = AppSettingsConfigKey.FileName;
  private filePath = AppSettingsConfigKey.Path;

  constructor(private httpClient: HttpClient) { }

  public async initApplicationSettings(): Promise<any> {
    return await this.httpClient
      .get<AppSettings>(this.filePath + '/' + this.fileName)
      .toPromise()
      .then((settings: AppSettings) => {
        this.config = settings;
      });
  }

  public get configuration(): AppSettings {
    return this.config;
  }
}
