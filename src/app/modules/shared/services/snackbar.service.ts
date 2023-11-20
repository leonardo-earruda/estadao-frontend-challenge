import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackbar: MatSnackBar) {}

  openSuccessSnackbar(message: string): void {
    this.matSnackbar.open(message, 'X', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  openErrorSnackbar(message: string): void {
    this.matSnackbar.open(message, 'X', {
      duration: 4000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
