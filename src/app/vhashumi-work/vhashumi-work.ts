import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page-services.service';
import { VhashumiService } from '../services/vhashumi-service.service';
import { PrintingAndCopying } from "./printing-and-copying/printing-and-copying";
import { ProfessionalAndCreative } from "./professional-and-creative/professional-and-creative";
import { DocumentProcessing } from "./document-processing/document-processing";
import { TechAndConnectivity } from "./tech-and-connectivity/tech-and-connectivity";


@Component({
  selector: 'app-vhashumi-work',
  imports: [PrintingAndCopying, ProfessionalAndCreative, DocumentProcessing, TechAndConnectivity],
  templateUrl: './vhashumi-work.html',
  styleUrl: './vhashumi-work.css',
})
export class VhashumiWork implements OnInit{

  constructor(public pageService: PageService, public vhashumiService: VhashumiService) {}

  ngOnInit(): void {
    
  }
}
