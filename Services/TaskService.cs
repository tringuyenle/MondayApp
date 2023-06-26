using Microsoft.Extensions.Options;
using MondayApp.Model;
using MongoDB.Driver;

namespace MondayApp.Services
{
    public class TaskService
    {
        private readonly IMongoCollection<Tasks> _taskCollection;

        public TaskService (IOptions<DatabaseSettings> database_setting)
        {
            var connection_string = new MongoClient(database_setting.Value.connection_string);
            var database_name = connection_string.GetDatabase(database_setting.Value.database_name);

            _taskCollection = database_name.GetCollection<Tasks>("Task");
        }

        public async Task<List<Tasks>> get() =>
            await _taskCollection.Find(_ => true).ToListAsync();

        public async Task<Tasks> get(string id) =>
            await _taskCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task create(Tasks new_task) =>
            await _taskCollection.InsertOneAsync(new_task);

        public async Task update(string id, Tasks update_task) =>
            await _taskCollection.ReplaceOneAsync(x => x.id == id, update_task);

        public async Task deleteOne (string id) =>
            await _taskCollection.DeleteOneAsync(x => x.id == id);

        public async Task deleteMany (string parent_id) =>
            await _taskCollection.DeleteManyAsync(x => x.parent_task == parent_id);

    }
}
