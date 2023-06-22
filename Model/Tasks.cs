using MongoDB.Bson.Serialization.Attributes;

namespace MondayApp.Model
{
    public class Tasks
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? id { get; set; }
        public string name { get; set; }
        public string? parent_task { get; set; }
        public string[]? child_task { get; set; }
        public string create_by { get; set; }
        public string create_date { get; set;}
        public string status { get; set;}
    }
}
