# --------------------------------------------------------
# 1. ETAPA DE DEPENDENCIAS (FRONTEND)
# Instala paquetes necesarios para construir el React
# --------------------------------------------------------
FROM node:20-alpine AS deps
# libc6-compat es útil si alguna librería de node lo requiere (común en alpine)
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

# --------------------------------------------------------
# 2. ETAPA DE CONSTRUCCIÓN (BUILDER)
# Compila el código de React
# --------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Traemos los node_modules de la etapa anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generamos la carpeta 'build' (o 'dist')
RUN npm run build

# --------------------------------------------------------
# 3. ETAPA DE PRODUCCIÓN (RUNNER)
# Imagen final limpia: Solo Backend + Archivos estáticos
# --------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# --- SEGURIDAD: Usuario no-root (Igual que tu ejemplo Next.js) ---
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 react_user

RUN mkdir -p /app/data && chown -R react_user:nodejs /app/data
# --- BACKEND ---
# 1. Copiamos solo el package.json del backend para instalar deps de producción
COPY backend/package*.json ./backend/
# 2. Instalamos SOLO dependencias de producción (ahorra espacio)
RUN cd backend && npm install --production

# 3. Copiamos el código fuente del backend
COPY backend ./backend

# --- FRONTEND ---
# Copiamos la carpeta 'build' generada en la etapa 2
# Nota: Ajusta los permisos para el usuario creado arriba
COPY --from=builder --chown=react_user:nodejs /app/build ./build

RUN touch /app/data/github.log && chmod 666 /app/data/github.log

# Cambiamos al usuario sin privilegios
USER react_user

# Exponer puerto y definir comando
EXPOSE 3000
ENV PORT 3000

# Ejecutar el servidor
CMD ["node", "backend/server.js"]