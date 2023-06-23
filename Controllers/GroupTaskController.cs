using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MondayApp.Model;
using MondayApp.Services;

namespace MondayApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupTaskController : ControllerBase
    {
        private readonly GroupTaskService _groupTaskService;

        public GroupTaskController(GroupTaskService groupTaskService)
        {
            _groupTaskService = groupTaskService;
        }

        [HttpGet]
        public async Task<List<GroupTask>> get() => await _groupTaskService.get();

        [HttpPost]
        public async Task<IActionResult> create(GroupTask new_group_task)
        {
            await _groupTaskService.create(new_group_task);
            return Ok("Thêm thành công");
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> update(string id, GroupTask update_group_task)
        {
            update_group_task.id = id;
            await _groupTaskService.update(id, update_group_task);

            return Ok("Chỉnh sửa thành công");
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> delete(string id)
        {
            await _groupTaskService.delete(id);

            return Ok("Xóa thành công");
        }
    }
}
