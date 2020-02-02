import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, IMotor, ITecnologia, IInmobiliaria } from '../interfaces';
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {

  productos: (IProducto | IMotor | ITecnologia | IInmobiliaria)[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _ProductoService : ProductoService) { }

  ngOnInit() {
    let ref = this._ProductoService.getProductosByUser("mKilGUHPNfex87XCNefC601AUhX2");

    ref.once("value", snap => {
      snap.forEach(child => {
        this.productos.push(child.val());
      })
    })
  }

  onDelete(nombre: string){
    this._ProductoService.deleteProduct(nombre);
  }

}