import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverButtonText = "Add Server"
  serverCreationStatus = "No Server Available"
  serverName = 'Test name';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServerCustom() {
    if (this.serverCreationStatus === "No Server Available") {
      this.serverCreationStatus = "Server was created!";
      this.serverButtonText = "Destroy Server";
    }
    else {
      this.serverCreationStatus = "No Server Available";
      this.serverButtonText = "Add Server";
    }

  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
