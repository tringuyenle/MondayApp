using MongoDB.Bson.Serialization.Attributes;

namespace MondayApp.Model
{
    public class GroupTask
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? id { get; set; }
        public string name { get; set; }
        public string? parent_id { get; set; }
    }
}
