<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->



Pronto. Branch main enviada para o Bitbucket com sucesso.

Para os próximos pushes, você precisará enviar para os dois remotes separadamente:
s

git push origin main      # GitHub
git push bitbucket main   # Bitbucket
Ou, se quiser um atalho, pode criar um alias no git para enviar aos dois de uma vez:


git remote set-url --add --push origin https://github.com/testeltcloud/wofi.git
git remote set-url --add --push origin git@bitbucket.org:ltcloud/woofi-lp-agency.git
