using MondayApp.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MondayDatabaseSettings>(builder.Configuration.GetSection("MondayDatabaseSettings"));
builder.Services.AddSingleton<MondayService>();
// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//}

//app.UseHttpsRedirection();
//app.UseStaticFiles();
//app.UseRouting();

app.MapGet("/", () => "Monday API!");
app.MapPost("/api/monday", async (MondayService mondayService, Monday monday) =>
{
    await mondayService.Create(monday);
    return Results.Ok();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
