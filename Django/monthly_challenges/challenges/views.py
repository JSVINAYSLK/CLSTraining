from django.shortcuts import render
from django.http import HttpResponse,HttpResponseNotFound,HttpResponseRedirect
from django.urls import reverse
monthly_challenges = {
    "january":"Start a month with great things",
    "february":"Take a next step to do ",
    "march":"You are going good",
    "april":"Start a month with great things",
    "may":"Take a next step to do ",
    "june":"You are going good",
    "july":"Start a month with great things",
    "august":"Take a next step to do ",
    "september":"You are going good",
    "october":"Start a month with great things",
    "november":"Take a next step to do ",
    "december":"You are going good"
}
# Create your views here.
def monthly_challenge_by_month(request,month):
    months=list(monthly_challenges.keys())

    if month>len(months):
        return HttpResponseNotFound("Invalid month")

    redirect_month=months[month-1]
    redirect_path=reverse("month_challenge",args=[redirect_month])
    return HttpResponseRedirect(redirect_path)

def monthly_challenge(request,month):
    try:
        challenge_text=monthly_challenges[month]
        response_data=f"<h1>{challenge_text}</h1>"
        return HttpResponse(response_data)
    except:
        return HttpResponseNotFound("<h1>This month is not supported</h1>")
