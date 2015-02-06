angular.module('zero')

.factory('Zero',function($sailsSocket){

  function _loadServer(){
    return $sailsSocket.get('/zero/server').then(function(res){
      //console.log(res.data);
      return res.data;
    })

  }

  function _loadDatabase(){
    return $sailsSocket.get('/zero/database').then(function(res){
      //console.log(res.data);
      return res.data;
    })

  }

  return {

    server : _loadServer,
    database : _loadDatabase
  };

});
