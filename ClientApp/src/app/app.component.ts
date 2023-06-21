import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode{
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}]
  },
  {
    name: 'Vegetable',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'level'];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  constructor(){
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node=>node.level,
    node=>node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node=>node.level,
    node=>node.expandable,
    node=>node.children
  );

  dataSource= new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener 
  );

  hasChild = (_: number, 
    node: ExampleFlatNode) => node.expandable;
}
