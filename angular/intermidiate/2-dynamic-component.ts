
// Q1: Why dynamic components?? How whould code like without them
// Q2: if candidate uses Angular less than 9 What is entry component

// basic syntax:
/*
    <div #f> <div>


    @viewChild('f', {read: ViewContainerRef}) f: any;

    constructor(componentFactoryResolver) {}

    var factory = componentFactoryResolver.resoveComponentFacotry(MyDynamicComponent);
    var cInstance = f.createComponent(f);

*/


/* example of dynamic model


private appendDialogComponentToBody(){
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
  const componentRef = componentFactory.create(this.injector);
  this.appRef.attachView(componentRef.hostView);

  const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  document.body.appendChild(domElem);

  this.dialogComponentRef = componentRef;
}


private removeDialogComponentFromBody() {
  this.appRef.detachView(this.dialogComponentRef.hostView);
  this.dialogComponentRef.destroy();
}


public open(componentType: Type<any>) {
    this.appendDialogComponentToBody();

    this.dialogComponentRef.instance.childComponentType = componentType; // to inject another component into dialog
}

*/