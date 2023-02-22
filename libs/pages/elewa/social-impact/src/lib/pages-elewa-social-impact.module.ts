import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule, BannersModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactHeroSectionComponent,
    SocialImpactCooperativeSectionComponent,
  ],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}
