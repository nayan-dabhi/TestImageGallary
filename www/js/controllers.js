angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope) {

  })

  .controller('HomeCtrl', function($scope, $stateParams, $ionicModal, $timeout) {
    $scope.selectedImage = "";

    $scope.images = [{
      src: 'img/img1.jpg'
    }, {
      src: 'img/img3.jpg',
    }, {
      src: 'img/img4.jpg',
    }, {
      src: 'img/img5.jpg',
    }, {
      src: 'img/img6.jpg',
    }, {
      src: 'img/img7.jpg'
    }];

    $ionicModal.fromTemplateUrl('templates/model_image_preview.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.closeImageModel = function() {
      $timeout(function() {
        if ($scope.modal != null) {
          $scope.modal.hide();
        }
      }, 500);
    }

    $scope.openImagePreview = function(imagePath) {
      $scope.selectedImage = imagePath;

      if ($scope.modal != null) {
        $scope.modal.show();
      }
    }

    $scope.setWallpaper = function() {
      if (window.cordova) {
        window.plugins.wallpaper.setImage($scope.selectedImage, function(error) {
          if (error) {
            console.error(error);
          } else {
            console.log('Success setting wallpaper.');
            $scope.closeImageModel();
          }
        });
      }
    }
  })

;
