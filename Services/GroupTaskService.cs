using Microsoft.Extensions.Options;
using MondayApp.Model;
using MongoDB.Driver;

namespace MondayApp.Services
{
    public class GroupTaskService
    {
        private readonly IMongoCollection<GroupTask> _groupTaskCollection;

        public GroupTaskService (IOptions<DatabaseSettings> database_setting)
        {
            var connection_string = new MongoClient(database_setting.Value.connection_string);
            var database_name = connection_string.GetDatabase(database_setting.Value.database_name);

            _groupTaskCollection = database_name.GetCollection<GroupTask>("Grouptask");
        }

        public async Task<List<GroupTask>> get() =>
            await _groupTaskCollection.Find(_ => true).ToListAsync();

        public async Task<GroupTask> get(string id) =>
            await _groupTaskCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task create(GroupTask new_group_task) =>
            await _groupTaskCollection.InsertOneAsync(new_group_task);

        public async Task update(string id, GroupTask update_group_task) =>
            await _groupTaskCollection.ReplaceOneAsync(x => x.id == id, update_group_task);

        public async Task delete(string id) =>
            await _groupTaskCollection.DeleteOneAsync(x => x.id == id);
    }
}
