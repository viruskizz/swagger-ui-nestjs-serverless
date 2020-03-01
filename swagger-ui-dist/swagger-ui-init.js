
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "Peacegen Library backend API",
      "description": "This api service is used for Peacegen Library. test 3",
      "version": "0.0.1",
      "contact": {
        "name": "FBW Developer Team",
        "url": "https://developer.fbw.center/",
        "email": "forbrighterworld.me@gmail.com"
      }
    },
    "tags": [
      {
        "name": "books",
        "description": ""
      },
      {
        "name": "data",
        "description": ""
      }
    ],
    "servers": [
      {
        "url": "http://localhost:3000",
        "description": "local server url"
      },
      {
        "url": " https://zu8a1xvy32.execute-api.ap-southeast-1.amazonaws.com/dev",
        "description": "development server url"
      }
    ],
    "components": {
      "securitySchemes": {
        "api_key": {
          "type": "apiKey",
          "in": "header",
          "name": "X-API-Key"
        }
      },
      "schemas": {
        "AddBookBodyDto": {
          "type": "object",
          "properties": {
            "thaiName": {
              "type": "string"
            },
            "engName": {
              "type": "string"
            },
            "ISBN": {
              "type": "string"
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "author": {
              "type": "string"
            },
            "interpreter": {
              "type": "string"
            },
            "edition": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "publisher": {
              "type": "string"
            },
            "printYear": {
              "type": "number"
            }
          },
          "required": [
            "thaiName",
            "engName",
            "ISBN",
            "tags",
            "author",
            "interpreter",
            "edition",
            "price",
            "publisher",
            "printYear"
          ]
        }
      }
    },
    "paths": {
      "/": {
        "get": {
          "operationId": "AppController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/books/test": {
        "get": {
          "operationId": "BooksController_getBooksTest",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/books": {
        "get": {
          "operationId": "BooksController_getAllBooks",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        },
        "post": {
          "operationId": "BooksController_addBook",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddBookBodyDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/books/{id}": {
        "get": {
          "operationId": "BooksController_getBook",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        },
        "delete": {
          "operationId": "BooksController_deleteBook",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/books/{id}/info": {
        "put": {
          "operationId": "BooksController_editBookInfo",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/data": {
        "get": {
          "operationId": "DataController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": "success full hello data api module",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "data"
          ]
        }
      },
      "/data/{table}/{pkey}": {
        "get": {
          "operationId": "DataController_getItemsList",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "data"
          ]
        }
      },
      "/data/{table}/{pkey}/{skey}": {
        "get": {
          "operationId": "DataController_getItem",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "data"
          ]
        },
        "delete": {
          "operationId": "DataController_deleteItem",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "data"
          ]
        },
        "post": {
          "operationId": "DataController_postItem",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "data"
          ]
        }
      }
    }
  },
  "customOptions": {},
  "swaggerUrl": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
