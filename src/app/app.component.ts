import { Component, OnInit } from "@angular/core";
import { SwPush } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "my-pwa";
  notificationData: any = {};

  constructor(private swPush: SwPush) {
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey:
            "..."
        })
        .then(subscription => {
          // send subscription to the server
        })
        .catch(console.error);
    }
  }

  ngOnInit(): void {
    this.swPush.notificationClicks.subscribe(data => {
      console.log("Notification click: ", data);
      this.notificationData = data;
    });
  }
}
