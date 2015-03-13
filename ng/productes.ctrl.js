angular.module("appProductes")
.controller("ProductesController", function ($scope, ProductesSvc) {
    $scope.productes = [];
    ProductesSvc.query(function (productes) {
        $scope.productes = productes;
    });

    $scope.afegir = function() {
        ProductesSvc.save({
            codi: $scope.codiN,
            nom: $scope.nomN,
            seccio: $scope.seccioN,
            preu: $scope.preuN
        }, function(){
            $scope.productes.unshift({
                codi: $scope.codiN,
                nom: $scope.nomN,
                seccio: $scope.seccioN,
                preu: $scope.preuN
            });
            
            $scope.codiN = "";
            $scope.nomN = "";
            $scope.seccioN = "";
            $scope.preuN = "";
        });
    };
    
    
    $scope.editar = function(producte) {
        $scope.codiE= producte.codi;
        $scope.nomE = producte.nom;
        $scope.seccioE = producte.seccio;
        $scope.preuE = producte.preu;
        
        $scope.producteEdit = producte;
        
      console.log(producte);   
    };
    
    
    $scope.actualitzar = function() {
        if ($scope.codiE && $scope.nomE && $scope.seccioE && $scope.preuE) {
            ProductesSvc.update({"_id": $scope.producteEdit._id , "codi": $scope.codiE , "nom" : $scope.nomE, "seccio" : $scope.seccioE, "preu" : $scope.preuE}, function() { 
                    $scope.producteEdit.codi = $scope.codiE;
                    $scope.producteEdit.nom = $scope.nomE;
                    $scope.producteEdit.seccio = $scope.seccioE;
                    $scope.producteEdit.preu = $scope.preuE;
                
                    $scope.codiE = null;
                    $scope.nomE = null;
                    $scope.seccioE = null;
                    $scope.preuE = null;
            
            });
            
        }
    };
    
    
    $scope.esborrar= function(producte) {
        ProductesSvc.delete({
        id: producte.codi
        }, function(){
            
            $scope.productes.splice(producte, 1);
    });
    };
    
    
     $scope.obtenirSeccio= function(producte) {
        ProductesSvc.delete({
        id: producte.codi
        }, function(){            
            $scope.productes.splice(producte, 1);
    });
    };
    
    
});