//TODO FIND URL SCHEME FOR SOCMEDS

import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { APP_TYPE, APP_URL, APP_URL_SCHEME, INAPP_TARGET } from '../../constants';
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { User } from '../../models';

@Component({
  selector: 'app-social-media-app',
  templateUrl: './social-media-app.component.html',
  styleUrls: ['./social-media-app.component.scss'],
  providers: [InAppBrowser, AppAvailability]
})
export class SocialMediaAppComponent {
  @Input() user: User;

  constructor(
    private platform: Platform,
    private appAvailability: AppAvailability,
    private inAppBrowser: InAppBrowser,
  ) { }


  redirectToFacebook(): void {
    if (this.user.fbUsername) {
      this.socialMedia(APP_TYPE.facebook, this.user.fbUsername);
    }
  }

  redirectToInstagram(): void {
    if (this.user.instagramUsername) {
      this.socialMedia(APP_TYPE.instagram, this.user.instagramUsername);
    }
  }

  redirectToTwitter(): void {
    if (this.user.twitterUsername) {
      this.socialMedia(APP_TYPE.twitter, this.user.twitterUsername);
    }
  }

  private socialMedia(type: string, username: string) {
    switch (type) {
      case APP_TYPE.facebook: {
        this.openFacebook(this.generateURL(APP_TYPE.facebook, username));
        break;
      }
      case APP_TYPE.instagram: {
        this.openInstagram(username, this.generateURL(APP_TYPE.instagram , username));
        break;
      }
      case APP_TYPE.twitter: {
        this.openTwitter(username, this.generateURL(APP_TYPE.twitter, username));
        break;
      }

      default:
        break;
    }
  }

  private generateURL(type: string, username: string): string {
    return `${APP_URL[type]}${username}/`;
  }

  private openFacebook(url: string): void {
    let app;
    if (this.platform.is('ios')) {
      app = APP_URL_SCHEME.facebookIoS;
    } else if (this.platform.is('android')) {
      app = APP_URL_SCHEME.facebookAndroid;
    } else {
      this.openInApp(url);
      return;
    }
    this.appAvailability.check(app)
      .then( () => {
        const fbUrl = APP_URL_SCHEME.facebookWebModal + url;
        this.openInApp(fbUrl);
      }
      ).catch(() => {
        this.openInApp(url);
      });
  }

  private openInstagram(username: string, url: string) {
    let app;
    if (this.platform.is('ios')) {
      app = APP_URL_SCHEME.instagramIos;
    } else if (this.platform.is('android')) {
      app = APP_URL_SCHEME.instagramAndroid;
    } else {
      this.openInApp(url);
      return;
    }
    this.appAvailability.check(app)
      .then(() => {
        this.openInApp(APP_URL_SCHEME.instagramWebModal + username);
      }
      ).catch(() => {
        this.openInApp(url);
      });
  }

  private openTwitter(username: string, url: string) {
    let app;
    if (this.platform.is('ios')) {
      app = APP_URL_SCHEME.twitterIos;
    } else if (this.platform.is('android')) {
      app = APP_URL_SCHEME.twitterAndroid;
    } else {
      this.openInApp(url);
      return;
    }
    this.appAvailability.check(app)
      .then(() => {
        const data = APP_URL_SCHEME.twitterWebModal + username;
        this.openInApp(data);
      }
      ).catch(() => {
        this.openInApp(url);
    });
  }

  private openInApp(url) {
    this.inAppBrowser.create(url, INAPP_TARGET.system);
  }


}
