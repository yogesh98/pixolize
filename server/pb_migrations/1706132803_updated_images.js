/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf6v061oceturvq")

  collection.indexes = [
    "CREATE INDEX `idx_mixVVAH` ON `images` (`user`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tyezbt6",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf6v061oceturvq")

  collection.indexes = [
    "CREATE INDEX `idx_mixVVAH` ON `images` (`user_id`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tyezbt6",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
