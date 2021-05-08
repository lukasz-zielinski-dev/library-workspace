import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// my-library
import { MyLibraryModule } from '../../../my-library/src/lib/my-library.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
