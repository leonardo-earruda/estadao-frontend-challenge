import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './components/loading/loading.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [LoadingComponent, NoDataComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, NoDataComponent],
  providers: [SnackbarService],
})
export class SharedModule {}
