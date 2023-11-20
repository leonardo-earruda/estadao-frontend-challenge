import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private zone: NgZone, private snackBarService: SnackbarService) {
    super();
  }

  override async handleError(response: any): Promise<void> {
    super.handleError(response);
    if (response instanceof HttpErrorResponse) {
      const message = await this._getMessage(response);
      this.zone.run(() => {
        switch (response.status) {
          case 500:
            'Erro interno no servidor!';
            break;
          default:
            this.snackBarService.openErrorSnackbar(message);
        }
      });
    }
  }

  private async _getMessage(errorResponse: HttpErrorResponse): Promise<string> {
    return errorResponse.error.error.message;
  }
}
