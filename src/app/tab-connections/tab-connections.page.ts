import { Component } from '@angular/core';
import { TOAST_MESSAGE } from '../shared/constants';
import { ConnectionCollection } from '../shared/models';
import { ToastService, UserConnectionService } from '../shared/services';

@Component({
  selector: 'app-tab-connections',
  templateUrl: 'tab-connections.page.html',
  styleUrls: ['tab-connections.page.scss']
})
export class TabConnectionsPage {

  connections: ConnectionCollection[];
  recentlyAddedConnections: ConnectionCollection[];
  showConnectionPage: boolean;
  type = 'recentlyAdded';

  constructor(
    private userConnectionService: UserConnectionService,
    private toastService: ToastService,
  ) {}

  ionViewWillEnter(): void {
    this.showConnectionPage = false;
    this.initializeConnections();
  }

  initializeConnections(): void {
    this.userConnectionService.getConnections().then((data) => {
      this.connections = data;
      this.recentlyAddedConnections = data.filter((d) => {
        if(this.isLessThanADay(d.connection.dateAdded.seconds)) {
          return d;
        }
      });
    }).catch(() => {
      this.toastService.showErrorToast(TOAST_MESSAGE.addConnectionFailed);
    }).finally(() => {
      this.showConnectionPage = true;
    });
  }

  showLines(index: number, array: ConnectionCollection[]): boolean {
    return index === array.length - 1 && array.length > 9;
  }

  showEmptyRecentConnection(): boolean {
    return this.recentlyAddedConnections.length === 0;
  }

  showEmptyAllConnection(): boolean {
    return this.connections.length === 0;
  }

  private isLessThanADay(time: number): boolean {
    const twentyFourHrInMs = 24 * 60 * 60 * 1000;
    const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;
    return time * 1000 > twentyFourHoursAgo && time * 1000 <= Date.now();
  }

  //Convert timestamp to Date
  private convertUnixTimeToDate(time: any): Date {
    console.log(time);
    if (time) {
      return new Date(time.seconds * 1000);
    }
    return null;
  }

}
