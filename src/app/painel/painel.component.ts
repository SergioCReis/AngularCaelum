import { Component, Input } from "@angular/core";
import { Foto } from "../foto/foto";

@Component({
    selector: 'caelumpic-painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent {
    @Input() foto: Foto
} 