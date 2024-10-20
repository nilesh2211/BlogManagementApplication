import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { SnackBarComponent } from "./components/snackbar/snackbar.component";
import { AuthModule } from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
  ],
  declarations: [SnackBarComponent],
  exports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
  ],
  providers: [],
})
export class SharedModule {}
