using MongoDB.Driver;
using Microsoft.Extensions.Options;
using MondayApp.Model;

namespace MondayApp.Services
{
    public class SubTaskServices
    {
        private readonly IMongoCollection<Tasks> _subTaskCollection;

        public SubTaskServices(IOptions<DatabaseSettings> database_setting)
        {
            var connection_string = new MongoClient(database_setting.Value.connection_string);
            var database_name = connection_string.GetDatabase(database_setting.Value.database_name);

            _subTaskCollection = database_name.GetCollection<Tasks>("Subtask");
        }

        public async Task<List<Tasks>> get(string parent_id) =>
            await _subTaskCollection.Find(x => x.parent_task == parent_id).ToListAsync();

        public async Task create(Tasks new_task) =>
            await _subTaskCollection.InsertOneAsync(new_task);

        public async Task deleteOneSubTask(string id) =>
            await _subTaskCollection.DeleteOneAsync(x => x.id == id);

        public async Task deleteManySubTask(string parent_id) =>
            await _subTaskCollection.DeleteManyAsync(x => x.parent_task == parent_id);

        public async Task update(string id, Tasks update_task) =>
            await _subTaskCollection.ReplaceOneAsync(x => x.id == id, update_task);
    }
}
