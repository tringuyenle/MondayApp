using MongoDB.Bson.Serialization.Attributes;

namespace MondayApp.Model
{
    public class Message
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? id { get; set; }
        public string? parent_id { get; set; }
        public string? reply_id { get; set; }
        public string content { get; set; }
        public string time { get; set; }
    }
}
