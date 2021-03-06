import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
{path:'', redirectTo: '/Home',pathMatch: 'full' },
{path: 'Home', component: HeaderComponent},
{path: 'About', component: IntroductionComponent},
{path: 'Gallery', component: GalleryComponent},
{path: 'Services', component: ContentComponent},
{path: 'Testimonials', component: TestimonialComponent},
{path: 'Clients', component: ClientsComponent},
{path: 'Pricing', component: PricingComponent}
];



@NgModule({
  declarations: [],
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
