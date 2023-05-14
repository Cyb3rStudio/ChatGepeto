import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameViewComponent } from './main-frame-view/main-frame-view.component';
import { ExchangePanelComponent } from './exchange-panel/exchange-panel.component';
import { CollectionsBarComponent } from './collections-bar/collections-bar.component';
import { ChatCollectionPanelComponent } from './chat-collection-panel/chat-collection-panel.component';
import { SystemTextInputPanelComponent } from './system-text-input-panel/system-text-input-panel.component';
import { UAExchangePanelComponent } from './uaexchange-panel/uaexchange-panel.component';
import { ExchangeControlPanelComponent } from './exchange-control-panel/exchange-control-panel.component';
import { ExchangeSettingsPanelComponent } from './exchange-settings-panel/exchange-settings-panel.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameViewComponent,
    ExchangePanelComponent,
    CollectionsBarComponent,
    ChatCollectionPanelComponent,
    SystemTextInputPanelComponent,
    UAExchangePanelComponent,
    ExchangeControlPanelComponent,
    ExchangeSettingsPanelComponent,
    StatusBarComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
