using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MondayApp.Model;
using MondayApp.Services;

namespace MondayApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubTaskController : ControllerBase
    {
        private readonly SubTaskServices _subTaskService;

        public SubTaskController (SubTaskServices subTaskService)
        {
            _subTaskService = subTaskService;
        }

        [HttpGet("{parent_id:length(24)}")]
        public async Task<List<Tasks>> get(string parent_id) => await _subTaskService.get(parent_id);

        [HttpPost]
        public async Task<IActionResult> post(Tasks new_task)
        {
            await _subTaskService.create(new_task);

            return Ok("Thêm thành công");
        }

    }
}
