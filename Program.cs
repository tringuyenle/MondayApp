
using MondayApp.Model;
using MondayApp.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("MondayDatabaseSettings"));
builder.Services.AddSingleton<TaskService>();
builder.Services.AddSingleton<SubTaskServices>();
builder.Services.AddSingleton<GroupTaskService>();
builder.Services.AddSingleton<MessageService>();
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//}

//app.UseHttpsRedirection();
//app.UseStaticFiles();
//app.UseRouting();

app.UseAuthorization();
app.MapControllers();

//app.MapGet("/", () => "Monday API!");
//app.MapPost("/api/monday", async (MondayService mondayService, Monday monday) =>
//{
//    await mondayService.Create(monday);
//    return Results.Ok();
//});

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller}/{action=Index}/{id?}");

//app.MapFallbackToFile("index.html");

app.Run();