using MongoDB.Bson.Serialization.Attributes;
namespace MondayApp.Data
{
    public class Monday
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
