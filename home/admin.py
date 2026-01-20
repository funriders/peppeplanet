from django.contrib import admin
from .models import GetInTouch


@admin.register(GetInTouch)
class GetInTouchAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'phone',
        'subject',
        'is_resolved',
        'created_at',
    )
    list_filter = ('is_resolved', 'created_at')
    search_fields = ('name', 'email', 'subject')
