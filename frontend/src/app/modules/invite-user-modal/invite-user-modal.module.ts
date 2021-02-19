import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

import {OpenprojectCommonModule} from "core-app/modules/common/openproject-common.module";
import {OpenprojectModalModule} from "core-app/modules/modal/modal.module";

import {InviteUserModalComponent} from "./invite-user.component";
import {InviteUserButtonComponent} from "./button/invite-user-button.component";
import {ProjectSelectionComponent} from "./project-selection/project-selection.component";
import {ProjectSearchComponent} from "./project-selection/project-search.component";
import {PrincipalComponent} from "./principal/principal.component";
import {PrincipalSearchComponent} from "./principal/principal-search.component";
import {RoleComponent} from "./role/role.component";
import {RoleSearchComponent} from "./role/role-search.component";
import {MessageComponent} from "./message/message.component";
import {SummaryComponent} from "./summary/summary.component";
import {SuccessComponent} from "./success/success.component";

@NgModule({
  imports: [
    OpenprojectModalModule,
    OpenprojectCommonModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    InviteUserButtonComponent,
    InviteUserModalComponent,
  ],
  declarations: [
    InviteUserModalComponent,
    InviteUserButtonComponent,
    ProjectSelectionComponent,
    ProjectSearchComponent,
    PrincipalComponent,
    PrincipalSearchComponent,
    RoleComponent,
    RoleSearchComponent,
    MessageComponent,
    SuccessComponent,
    SummaryComponent,
  ]
})
export class OpenprojectInviteUserModalModule { }
