using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MondayApp.Model;
using MondayApp.Services;

namespace MondayApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TaskController(TaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public async Task<List<Tasks>> get() => await _taskService.get();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Tasks>> get(string id)
        {
            var task = await _taskService.get(id);

            if (task == null) { return NotFound(); }

            return task;
        }

        [HttpPost]
        public async Task<IActionResult> post(Tasks new_task)
        {
            await _taskService.create(new_task);

            return Ok("Thêm thành công");
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> put(string id, Tasks update_task)
        {
            var temp_task = await _taskService.get(id);

            if (temp_task == null) { return NotFound(); }

            update_task.id = temp_task.id;

            await _taskService.update(id, update_task);

            return Ok("Chỉnh sửa thành công");
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> delete(string id)
        {
            var temp_task = await _taskService.get(id);

            if (temp_task == null) { return NotFound(); }

            await _taskService.delete(id);

            return Ok("Xóa thành công");
        }
    }
}
