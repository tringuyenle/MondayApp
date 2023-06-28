using Microsoft.Extensions.Options;
using MondayApp.Model;
using MongoDB.Driver;

namespace MondayApp.Services
{
    public class MessageService
    {
        private readonly IMongoCollection<Message> _messageCollection;

        public MessageService(IOptions<DatabaseSettings> database_setting)
        {
            var connection_string = new MongoClient(database_setting.Value.connection_string);
            var database_name = connection_string.GetDatabase(database_setting.Value.database_name);

            _messageCollection = database_name.GetCollection<Message>("Message");
        }

        public async Task<List<Message>> get() =>
            await _messageCollection.Find(_ => true).ToListAsync();

        public async Task<Message> get(string id) =>
            await _messageCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task create(Message new_mess) =>
            await _messageCollection.InsertOneAsync(new_mess);

        public async Task update(string id, Message update_mess) =>
            await _messageCollection.ReplaceOneAsync(x => x.id == id, update_mess);

        public async Task deleteOne(string id) =>
            await _messageCollection.DeleteOneAsync(x => x.id == id);

        public async Task deleteMany(string id) =>
            await _messageCollection.DeleteManyAsync(x => x.parent_id == id);
    }
}
