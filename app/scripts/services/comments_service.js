/**
 * Created by TSShriram on 22/01/15.
 */
'use strict';
angular.module('ratingApp')
    .service('commentsService', function ($http,$q) {

        var postComments = function(comments, ratingValue) {
            var defer = $q.defer();
            $http.post('/api/comments/post', {

                    comments: comments || '',
                    ratingValue: ratingValue || ''

            })
                .success(function(data, status, headers, config) {
                    defer.resolve(data, status, headers, config);
                })
                .error(function(data, status, headers, config) {
                    defer.reject(data, status, headers, config);
                });
            return defer.promise;
        };

        return {
            postComments: postComments


        };
    });
