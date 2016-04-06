<% _.each(glyphs, function(glyph) { %>
%<%= prefix %><%= glyph.name %> {
    content: "\<%= glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase() %>";
}

.<%= prefix %><%= glyph.name %> {
    &:before {
        @extend %<%= prefix %><%= glyph.name %>
    }
}

<% }); %>