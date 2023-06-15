using MongoDB.Bson.Serialization.Attributes;

namespace MondayApp.Model
{
    public class Tasks
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? id { get; set; }

        public string name { get; set; }

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string parent_task { get; set; } = string.Empty;

        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string[] child_task { get; set; } = new string[0];

        public string create_by { get; set; }

        public string create_date { get; set;}
        public string status { get; set;}
    }
}
