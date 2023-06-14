using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MondayApp.Data
{
    public class MondayService
    {
        private readonly IMongoCollection<Monday> _mondays;
        
        public MondayService(IOptions<MondayDatabaseSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _mondays = mongoClient.GetDatabase(options.Value.DatabaseName).GetCollection<Monday>(options.Value.MondayCollectionName);
        }

        public async Task<List<Monday>> Get() => 
            await _mondays.Find(_ => true).ToListAsync();

        public async Task<Monday> Get(string id) =>
            await _mondays.Find(mbox => mbox.Id == id).FirstOrDefaultAsync();

        public async Task Create(Monday newMonday) =>
            await _mondays.InsertOneAsync(newMonday);

        public async Task Update(string id, Monday updateMonday) =>
            await _mondays.ReplaceOneAsync(m => m.Id == id, updateMonday);

        public async Task Remove(string id) =>
            await _mondays.DeleteOneAsync(m => m.Id == id);
    }
}
