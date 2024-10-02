import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: '',
        component: AccordionComponent
    }
];

@NgModule({
    declarations: [
        AccordionComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})
export class AccordionModule { }