/**
 * @flow
 * @relayHash b96eb085627e3991d4e6da0a8978fe3a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppPage$ref = any;
type Web$ref = any;
export type webQueryVariables = {|
  id: string
|};
export type webQueryResponse = {|
  +$fragmentRefs: AppPage$ref & Web$ref
|};
*/


/*
query webQuery(
  $id: ID!
) {
  ...AppPage
  ...Web_1Bmzm5
}

fragment AppPage on Query {
  me {
    themeName
    id
  }
}

fragment Web_1Bmzm5 on Query {
  web(id: $id) {
    id
    ...EditMainNav
    ...WebName
    ...WebPosts
  }
}

fragment EditMainNav on Web {
  id
  name
}

fragment WebName on Web {
  id
  name
}

fragment WebPosts on Web {
  posts(orderBy: updatedAt_DESC) {
    id
    parents {
      id
    }
    ...WebPostsItem
  }
}

fragment WebPostsItem on Post {
  id
  name
  updatedAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "webQuery",
  "id": null,
  "text": "query webQuery(\n  $id: ID!\n) {\n  ...AppPage\n  ...Web_1Bmzm5\n}\n\nfragment AppPage on Query {\n  me {\n    themeName\n    id\n  }\n}\n\nfragment Web_1Bmzm5 on Query {\n  web(id: $id) {\n    id\n    ...EditMainNav\n    ...WebName\n    ...WebPosts\n  }\n}\n\nfragment EditMainNav on Web {\n  id\n  name\n}\n\nfragment WebName on Web {\n  id\n  name\n}\n\nfragment WebPosts on Web {\n  posts(orderBy: updatedAt_DESC) {\n    id\n    parents {\n      id\n    }\n    ...WebPostsItem\n  }\n}\n\nfragment WebPostsItem on Post {\n  id\n  name\n  updatedAt\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "webQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AppPage",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Web",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "webQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "themeName",
            "args": null,
            "storageKey": null
          },
          v1
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "web",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Web",
        "plural": false,
        "selections": [
          v1,
          v2,
          {
            "kind": "ScalarHandle",
            "alias": null,
            "name": "name",
            "args": null,
            "handle": "draft",
            "key": "",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "posts",
            "storageKey": "posts(orderBy:\"updatedAt_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "updatedAt_DESC",
                "type": "PostOrderByInput"
              }
            ],
            "concreteType": "Post",
            "plural": true,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parents",
                "storageKey": null,
                "args": null,
                "concreteType": "Post",
                "plural": true,
                "selections": [
                  v1
                ]
              },
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "updatedAt",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ca8032c9d0808ae5d269c3e9d6bb6c6';
module.exports = node;
