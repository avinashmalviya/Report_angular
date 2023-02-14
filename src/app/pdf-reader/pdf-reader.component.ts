import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent {

  users:any[] = []
  response:any 

    async ngOnInit(){
    this.response = await axios.get("http://demo3205980.mockable.io/get_Report_Pdf")
    console.log (this.response.data)
    this.users = this.response.data

  }

 }
